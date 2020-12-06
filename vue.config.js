module.exports = {
  devServer:{
    host:'0.0.0.0',
    port:8080,
    proxy:{
      '/api':{
        target:'https://ntdzwx.dps.qikan.com/api',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        },
        headers: {
          referer: 'https://ntdzwx.dps.qikan.com/Template/WeChatLibrary4/index.html',
          origin: 'https://ntdzwx.dps.qikan.com/Template/WeChatLibrary4/index.html'
        }
      }
    }
  },
  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  productionSourceMap:true,
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}