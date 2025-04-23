const base = {
    get() {
        return {
            url : "http://localhost:8080/chuandaidapei/",
            name: "chuandaidapei",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chuandaidapei/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "穿戴搭配系统"
        } 
    }
}
export default base
