<template>
  <div class="wrap">
    <h1>{{content.Title}}</h1>
    <div v-if="content.Author" class="author">作者：{{ content.Author }}</div>
    <div v-html="content.Content" class="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {}
    };
  },
  created() {
      this.fetchContent()
  },
  methods: {
    fetchContent() {
      let url = `/magazine/article/GetFullDetail?&articleid=${this.$route.query.articleid}`
      this.axios
        .get(url)
        .then((res) => {
          this.content = res.Data
        })
    },
  },
};
</script>

<style>
.wrap {
  width: 1000px;
  margin: auto 0;
}
.content {
  font-size: 15px;
}
</style>