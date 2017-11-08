<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <input type="text" value="" v-model="mingwen"><input type="button" value="加密" @click="jiami()">
    <input type="button" value="MD5加密" @click="md5jiami()">
    <br><br>
    <input type="text" v-model="miwen"><input type="button" value="解密" @click="jiemi()">
    <br>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'crypto-js加密',
      mingwen:"加密一下试试",
      miwen:"",
      key:"wznxlssm"
    }
  },
  mounted(){
    console.log(this)
  },
  methods:{
    jiami:function(){ //加密

      this.miwen=this.getAES(this.mingwen,this.key) 
    },
    jiemi:function(){ //解密
      alert(this.getDAes(this.miwen,this.key))
    },
    md5jiami:function(){ //MD5加密
      alert(this.getMD5(this.miwen))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
