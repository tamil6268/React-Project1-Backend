const data=(req,res)=>{
    res.send([
        {
            id:"wf343f4fg4444bhgtrwtrjuwgg",
            title:"Technology fair and exhibition in China",
            url: "https://thumbs.dreamstime.com/z/technology-fair-exhibition-china-23697237.jpg",
            content:"A Technology fair about semi-conductor and integration circle industry in Guangdong, China.",
            category:"Technology",      
            date:"on September 20, 2015.",
          },
        {
            id: "wf343f22g2dadm5",
            title:"Laboratory Test Tube in Science Research Lab",
            url: "https://thumbs.dreamstime.com/z/laboratory-test-tube-science-research-lab-5569187.jpg",
            content:"Scientist hand holding a laboratory glass test tube filled with yellow liquid for an experiment in a science research lab",
            category:"Technology",
            date:"on March 2, 2019.",
          },
        {
            id: "tewf343fghugmkfhd5s",
            title:"Laboratory",
            url: "https://thumbs.dreamstime.com/z/laboratory-18359431.jpg",
            content:"Scientists working at the laboratory",
            category:"Technology",
            date:"on December 21,2021"
        }
    ])
}
module.exports.apiController=data;