function domainName(url){
    let result = url.replace('http://','').replace('https://','').replace('www.','')
    return result.split('.')[0]
}