/*
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-09-13 11:50:07
 * @LastEditors: ${author}
 * @LastEditTime: 2023-09-13 13:58:36
 */
import axios from 'axios';
import { load } from 'cheerio';
import { decode } from 'iconv-lite';
const expectedBufferString = 'e8afbee7a88be4b88de5ad98e59ca8e68896e5b7b2e588a0e999a4';
const expectedBuffer = Buffer.from(expectedBufferString, 'hex');

interface Class {
    title: string;
    link: string;
    dec: string;
    img: string;
    school: string;
    auth: string;
}

const classesList: Class[] = [];

export async function main(): Promise<Class[]> {
    return new Promise<Class[]>(async (resolve, reject) => {
        console.log('开始进行一次爬取')
        // const timeout = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         reject(new Error('请求超时'));
        //     }, 5000); // 设置超时时间为5秒
        // });
        const promises: Promise<void>[] = [];
        for (let courseId = 208843967; courseId <= 208843967; courseId++) {
            promises.push(
                axios({
                    method: 'get',
                    url: "https://mooc1.chaoxing.com/course-ans/courseportal/mobile/protal?courseId=" + courseId + "#(测试爬虫,做学习通推广,侵权联系2034298621@qq.com,项目在https://github.com/duringbug/xxt_crawler.git)",
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
                        'Server': 'nginx',
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                        'Accept-Language': 'zh-CN,zh;q=0.9',
                    },
                    responseType: 'arraybuffer'
                }).then((res) => {
                    let html = null;
                    if (!Buffer.compare(res.data, expectedBuffer)) {
                        resolve(classesList)
                    }
                    try {
                        html = decode(res.data, 'utf-8') as string;
                    } catch (error) {
                        resolve(classesList);
                    }
                    const $ = load(html as string);
                    const dec = $('div.course-introduce p').text().trim()
                    if (dec != "") {
                        const title = $('div.course-name').text().trim()
                        const auth = $('span.speaker-item span.title').next().text()
                        const link = "https://mooc1.chaoxing.com/course-ans/courseportal/mobile/protal?courseId=" + courseId
                        const school = $('span.speaker-item').text().trim()
                        console.log(school + " " + title + " " + auth + " " + link)
                    }
                }).catch((e) => {
                    console.error("爬取失败")
                    resolve(classesList)
                })
            );
        }
        await Promise.all(promises);
    })
}
main()