
import CryptoJS from 'crypto-js'
export default{
    install(Vue){
        
        //DES 加密
        var key  = "wgzmqanxy";   //默认key

        function getAesString(data,key){//加密
            var encrypted =CryptoJS.DES.encrypt(data,key);
            return encrypted.toString();    //返回的是密文
        }
        
        function getDAesString(encrypted,key){//解密
            var decrypted =CryptoJS.DES.decrypt(encrypted.toString(),key);
            return decrypted.toString(CryptoJS.enc.Utf8); //返回加密信息
        }

        //MD5 加密
        Vue.prototype.getMD5 = function getMD5(data){
            var md5 = CryptoJS.MD5(data);
            return md5;
        }


        
        Vue.prototype.getAES = function getAES(data){ //加密             
            var encrypted =getAesString(data,key); //密文
            return encrypted;
        }         
        Vue.prototype.getDAes = function getDAes(data){//解密
                                        var decryptedStr =getDAesString(data,key);
                                        return decryptedStr;
                                      }; 

    
        //下面的是AES加密
        // function getAesString(data,key,iv){//加密
        //     var key  = CryptoJS.enc.Utf8.parse(key);
        //     //alert(key）;
        //     var iv   = CryptoJS.enc.Utf8.parse(iv);
        //     var encrypted =CryptoJS.AES.encrypt(data,key,
        //         {
        //             iv:iv,
        //             mode:CryptoJS.mode.CBC,
        //             padding:CryptoJS.pad.Pkcs7
        //         });
        //     return encrypted.toString();    //返回的是base64格式的密文
        //   }
        //   function getDAesString(encrypted,key,iv){//解密
        //     var key  = CryptoJS.enc.Utf8.parse(key);
        //     var iv   = CryptoJS.enc.Utf8.parse(iv);
        //     var decrypted =CryptoJS.AES.decrypt(encrypted,key,
        //         {
        //             iv:iv,
        //             mode:CryptoJS.mode.CBC,
        //             padding:CryptoJS.pad.Pkcs7
        //         });
        //     return decrypted.toString(CryptoJS.enc.Utf8);      //
        //   }

        
        // Vue.prototype.getAES = function getAES(data){ //加密
        //                                 var key  = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';  //密钥
        //                                 var iv   = '1234567812345678';
        //                                 var encrypted =getAesString(data,key,iv); //密文
        //                                 var encrypted1 =CryptoJS.enc.Utf8.parse(encrypted);
        //                                 return encrypted;
        //                               }
          
        // Vue.prototype.getDAes = function getDAes(data){//解密
                                    //     var key  = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';  //密钥
                                    //     var iv   = '1234567812345678';
                                    //     var decryptedStr =getDAesString(data,key,iv);
                                    //     return decryptedStr;
                                    //   }; 

    }

}