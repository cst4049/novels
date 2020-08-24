<template>
<el-container>
  <el-aside>
    <el-tree :data="data" :props="defaultProps" 
    default-expand-all @node-click="handleNodeClick"></el-tree>
  </el-aside>
  <el-container>
  <el-main>
        <el-card :body-style="{ padding: '10px'}" shadow="always">

      <div style="padding: 14px;">
        <center>{{novel.name}}</center>
        <p class="time">{{ novel.autor }}</p>
      </div>

      <img 
      :src='"/api/static/cover/" + novel.num +".jpg"' 
      lazy
      class="image">
      <div style="padding: 14px;">
        <p class="time">{{ novel.blurb }}</p>
      </div>
    </el-card>

  </el-main>
  </el-container>
</el-container>

</template>

<script>

import axios from '../http'

  export default {
    data() {
      return {
        novel: JSON.parse(sessionStorage.getItem('novel')),
        data: [],
        chapters: [],
        defaultProps: {
          children: 'son',
          label: 'name'
        }
      };
    },
    mounted() {
      axios.post('/api/novels/volume', 
      {'novel_id': this.novel._id}).then(
        response => (
          this.data = response.data.catalog,
          this.chapters = response.data.chapters,
          this.loading = false
        ))
    },
    methods: {
      handleNodeClick(data) {
        if (data.type === 'chapter'){
          var cid = data._id
          var cids = this.chapters.slice(this.chapters.indexOf(cid),)
          sessionStorage.setItem('cid', cid)
          sessionStorage.setItem('cids', JSON.stringify(cids))
          this.$router.push({name:'章节内容'})
        }
      }
    }
  };
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
