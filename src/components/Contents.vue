<template>
<el-container>
  <ul class="infinite-list" v-infinite-scroll="load" infinite-scroll-disabled="disabled" style="overflow:auto">
    <div v-for="i in datas" :key="i.id" class="infinite-list-item">
      <center>{{i.data.name}}</center>
      <p class="text" v-html="i.data.content"></p>
      <el-card :body-style="{ padding: '10px'}" shadow="always" 
      v-for="img in i.data.dimgs" :key="img">
      <img 
      :src='"/api/static/imgs/" + img' 
      lazy
      class="image">
    </el-card>
    </div>

    <p class="text" v-if="noMore"><center>没有更多了</center></p>
  </ul>
</el-container>
</template>

<script>
import axios from '../http'
  export default {
    name: 'Contents',
    data () {
      return {
        cid: sessionStorage.getItem('cid'),
        cids: [sessionStorage.getItem('cid')],
        allcids: JSON.parse(sessionStorage.getItem('cids')),
        datas: [],
        loading: true
      }
    },
    mounted() {
              axios.post('http://localhost:8080/api/chapters', 
          {'cid': this.cid}).then(
        response => (
          console.log(this.cid),
          this.datas.push({data: response.data, id: this.cid}),
          this.loading = false,
          this.cid = this.allcids.slice(this.allcids.indexOf(this.cid) + 1,)[0],
          this.cids.push(this.allcids.slice(this.allcids.indexOf(this.cid) + 1,)[0])
        ))
    },
    computed: {
      noMore () {
        return this.allcids.length == this.cids.length
      },
      disabled () {
        return this.allcids.length == this.cids.length
      }
    },
    methods: {
      load () {
        if (this.cid){
        axios.post('/api/chapters', 
          {'cid': this.cid}).then(
        response => (
          console.log('ccccccccccc'),
          this.datas.push({data: response.data, id: this.cid}),
          this.loading = false,
          this.cid = this.allcids.slice(this.allcids.indexOf(this.cid) + 1,)[0],
          this.cids.push(this.allcids.slice(this.allcids.indexOf(this.cid) + 1,)[0])
        ))}
        }
    }
  }
</script>

<style>
  .text {
    align-content: center;
    font-size: 20px;
    color: #999;
  }
    .image {
    width: 80%;
    height: 80%;
    display: block;
  }
</style>
