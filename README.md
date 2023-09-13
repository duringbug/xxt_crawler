<!--
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-09-13 09:08:21
 * @LastEditors: ${author}
 * @LastEditTime: 2023-09-13 12:01:11
-->
# xxt_crawler(项目停滞:ip被官方封了)

## ts的环境搭建
要开始一个 TypeScript 项目，您可以使用 npm（Node.js 包管理器）来初始化项目并配置 TypeScript。以下是一些基本步骤：

安装 Node.js 和 npm： 首先，确保您已经安装了 Node.js 和 npm。您可以在 Node.js 官方网站上下载并安装它们：Node.js 官网。

创建项目目录： 在您的计算机上创建一个新的项目目录，并进入该目录。

初始化 npm 项目： 在项目目录中打开终端，并运行以下命令来初始化 npm 项目：

```bash
npm init -y
```
这将创建一个 package.json 文件，其中包含了项目的配置信息。

安装 TypeScript： 接下来，安装 TypeScript 作为项目的开发依赖。运行以下命令：

```bash
npm install typescript ts-loader --save-dev
```
这将在项目中安装 TypeScript。

创建 TypeScript 配置文件： 创建一个 tsconfig.json 文件，用于配置 TypeScript 项目的编译选项。您可以手动创建该文件，也可以运行以下命令来生成一个初始的配置文件：

```bash
npx tsc --init
```
创建 TypeScript 源代码文件： 在项目目录中创建 TypeScript 源代码文件，通常使用 .ts 扩展名。例如，创建一个 app.ts 文件，并在其中编写 TypeScript 代码。

编写 TypeScript 代码： 在创建的 TypeScript 源代码文件中编写您的项目代码。

编译 TypeScript 代码： 使用 TypeScript 编译器 tsc 来将 TypeScript 代码编译成 JavaScript。运行以下命令：

```bash
npx tsc
```
这将根据 tsconfig.json 文件中的配置将 TypeScript 代码编译为 JavaScript。

运行项目： 您可以使用 Node.js 运行编译后的 JavaScript 代码，例如：

```bash
node app.js
```
这些步骤将帮助您开始一个 TypeScript 项目。您可以根据项目的需求来进一步配置和添加依赖。确保查阅 TypeScript 文档以了解更多关于 TypeScript 的用法和配置选项：TypeScript 官方文档。

## ts的测试与打包
在 TypeScript 项目中进行测试和打包是非常常见的任务。以下是一些关于如何进行测试和打包的基本步骤：

测试 TypeScript 代码
选择测试框架： 首先，您需要选择一个测试框架，例如 Jest、Mocha、Jasmine 等。Jest 是一个流行的 JavaScript 测试框架，对 TypeScript 提供了很好的支持。

安装测试库： 根据您选择的测试框架，使用 npm 或 yarn 安装相应的测试库和运行器。例如，对于 Jest，您可以运行以下命令：

```bash
npm install --save-dev jest @types/jest ts-jest
```
在tsconfig.json中添加
```json
{
  "compilerOptions": {
    "types": ["jest"]
  }
}
```
创建测试文件： 在项目中创建与您的 TypeScript 文件相对应的测试文件，通常命名为 *.test.ts 或 *.spec.ts。

编写测试用例： 在测试文件中编写测试用例，使用测试框架提供的断言和测试工具来验证代码的行为。

运行测试： 使用测试框架的命令来运行测试。例如，在使用 Jest 的项目中，运行以下命令：

```bash
npx jest
```
这将运行项目中的所有测试用例并输出结果。

打包 TypeScript 代码
选择打包工具： 选择一个适合您项目的打包工具。一些常见的选项包括 webpack、Rollup、Parcel 等。

安装打包工具： 根据您选择的打包工具，使用 npm 或 yarn 安装相应的打包工具和插件。

```bash
npm install webpack webpack-cli --save-dev
```

```bash
npm install --save-dev @types/lodash
```

创建配置文件： 针对您的项目，创建一个相应的打包配置文件。例如，对于 webpack，您可以创建一个 webpack.config.js 文件。

配置打包： 在配置文件中配置打包选项，包括输入文件、输出目录、加载器（Loader）、插件（Plugin）等。

运行打包： 使用打包工具的命令来运行打包。例如，在使用 webpack 的项目中，运行以下命令：

```bash
npx webpack
```
在package.json里添加
```json
  "scripts": {
    "test": "npx jest",
    "build": "npx webpack"
  },
```
这将根据您的配置文件将 TypeScript 代码打包成可部署的 JavaScript 文件。

请注意，上述步骤是一个简单的概述，实际上在测试和打包过程中可能会涉及更多的配置和任务，具体取决于项目的需求和复杂性。您可以根据项目的具体要求来选择适当的测试框架和打包工具，并进行相应的配置和定制。查看选定框架和工具的官方文档以获取更详细的指导和示例。
