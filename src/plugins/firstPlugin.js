export default {
    // called by Vue.use(FirstPlugin)
    //https://medium.com/swlh/how-to-create-a-vue-plugin-36d5987d4768
    //https://learnvue.co/2020/01/how-to-make-your-first-vuejs-plugin/
    //https://v3.vuejs.org/api/application-config.html#optionmergestrategies

    install(app,options) {

        app.config.globalProperties.$translate = key => {
            return key.split('.').reduce((o, i) => {
                console.log(o);
              if (o) return o[i]
            }, options)
          }

          app.provide('i18n', options)
        // create a mixin 
        app.mixin({
            created() {
                // define a global property
                //app.VERSION = 'v2.0.3';
                //console.log(app.VERSION);

                app.config.globalProperties.$italicHTML = function (text) {
                    return '<i>' + text + '</i>';
                } 

                app.config.globalProperties.$getImg = function (val) {
                    return require("@/assets/" + val);
                }

                
            }
        });

        app.directive('click-outside', {
            beforeMount: (el, binding) => {
                el.clickOutsideEvent = event => {
                // here I check that click was outside the el and his children
                if (!(el == event.target || el.contains(event.target))) {
                    // and if it did, call method provided in attribute value
                    if (typeof binding.value === 'function') {
                        binding.value.call();
                    } 
                    else{
                        console.log("binding must be a function");
                    }              
                }
                };
                document.addEventListener("click", el.clickOutsideEvent);
            },
            unmounted: el => {
                document.removeEventListener("click", el.clickOutsideEvent);
            },
          })
      

        
    }
 }