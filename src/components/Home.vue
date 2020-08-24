<template>
  <div>
  <el-col :span="24">
      <el-menu
        mode='horizontal'
        :default-active="idx"
        router
        class="el-menu-horizontal-demo">
        <el-menu-item v-for="obj in menu" :index="obj.path" :key="obj.path">
          <i class="el-icon-notebook-2"></i>
          <span slot="title">{{obj.label}}</span>
        </el-menu-item>
      </el-menu>
  </el-col>
  <el-col :span="24" class="content-wrapper">
      <transition name="fade" mode="out-in">
          <router-view></router-view>
      </transition>
  </el-col>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      idx: 'japan',
      menu: [
        {'label': '日漫小说', 'path': 'japan'},
        // {'label': '标签2', 'path': 'china'}
        ]
      }
  }
}
</script>
