export default function SimpleModule(moduleOptions){
    // this.options ile nuxt options lara ulaşabiliriz, moduller arasında option ları paylaşmak için kullanabiliriz
    // this.nuxt ile de nuxt ın yaşam döngüsü option larına ulaşabiliriz,
    // modulle async de destekler 
    this.nuxt.hook('modules:done',(modulesContainer)=>{

    })
}

modules.export.meta=require('./package.json')