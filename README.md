# [@kaokei/vuepress-plugin-tongji](https://github.com/kaokei/vuepress-plugin-tongji)

> vuepress 的插件，支持各种平台的统计脚本  
> 目前支持百度、友盟、ga 和 gtag  
> 主要功能就是加载对应的脚本。并且在 router.afterEach 中上报对应的 pageView 事件。

## Install

```bash
npm install -D @kaokei/vuepress-plugin-tongji
```

## Usage

```javascript
module.exports = {
  plugins: [
    "vuepress-plugin-baidu-tongji",
    {
      hm: "abcdefghijklmnopqrstuvwxyz12345678",
      ga: "UA-XXXXX-Y",
      gtag: "G-EYE5NYPT4N",
      cnzz: "XXXXXX",
      cnzz_web: "YYYYYYY",
    },
  ],
};
```

or

```javascript
module.exports = {
  plugins: [
    "baidu-tongji",
    {
      hm: "abcdefghijklmnopqrstuvwxyz123456",
      ga: "UA-XXXXX-Y",
      gtag: "G-EYE5NYPT4N",
      cnzz: "XXXXXX",
      cnzz_web: "YYYYYYY",
    },
  ],
};
```

or

```javascript
module.exports = {
  plugins: {
    "baidu-tongji": {
      hm: "abcdefghijklmnopqrstuvwxyz123456",
      ga: "UA-XXXXX-Y",
      gtag: "G-EYE5NYPT4N",
      cnzz: "XXXXXX",
      cnzz_web: "YYYYYYY",
    },
  },
};
```

## Options

### hm

- Type: `string`
- Default: `undefined`

对应百度的统计 ID。

比如这个链接中的`https://hm.baidu.com/hm.js?46670fd61dde16af9949ec6af1c52ff9`。

hm 对应链接中的`46670fd61dde16af9949ec6af1c52ff9`。

### ga

- Type: `string`
- Default: `undefined`

对应老版本的 google analytics 的 ID。特征是`UA-`开头。

### gtag

- Type: `string`
- Default: `undefined`

对应新版本的 google gtag 的 ID。特征是`G-`开头。

### cnzz 和 cnzz_web

- Type: `string`
- Default: `undefined`

对应友盟，也就是 CNZZ 的统计。需要提供两个 ID。

比如这个链接：`https://s9.cnzz.com/z_stat.php?id=2380698182&web_id=2380698182`

那么 cnzz 对应的是 id 部分，也就是`2380698182`，cnzz_web 对应的是 web_id 部分，也就是`2380698182`。

但是似乎两个 id 是一样的，搞不清楚 CNZZ 为啥需要两个 ID。
