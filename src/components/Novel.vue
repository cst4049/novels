<template>
<el-row :gutter="20">
  <el-row>
    <el-input v-model="keyword" style="width: 50%" placeholder="名称搜索" clearable></el-input>
    <el-button type="primary" @click="getNov">搜索</el-button>
   </el-row>

  <el-col :span="6" v-for="data in datas" :key="data.num">
    <el-card :body-style="{ padding: '10px'}" shadow="always" @click.native="getVol(data)">
      <img 
      :src='"/api/static/cover/" + data.num +".jpg"' 
      lazy
      class="image">
      <div style="padding: 14px;">
        <span>{{data.name}}</span>
        <div class="bottom clearfix">
          <p class="time">{{ data.autor }}</p>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

</template>

<script>

import axios from '../http'
export default {
  name: 'Home',
  data() {
    return {
      page: 1,
      pageNo: 10,
      keyword: '',
      loading: true,
      datas: []
    }
  },
  methods: {
    getVol: function(novel){
      sessionStorage.setItem('novel', JSON.stringify(novel))
      this.$router.push({name:'章节目录'})
    },
    getNov(){
      axios.post('/api/novels', 
      {'page': this.page, 'pageNo': this.pageNo, 'keyword': this.keyword}).then(
      response => (
        this.datas = response.data.novels,
        this.loading = false
      ))
    }
  },
  beforeCreate() {
    axios.post('/api/novels', 
      {'page': this.page, 'pageNo': this.pageNo, 'keyword': this.keyword}).then(
      response => (
        this.datas = response.data.novels,
        this.loading = false
      ))
  }

}
</script>

<style>
  .time {
    align-content: center;
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
