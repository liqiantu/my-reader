<template>
  <div class="wrap">
    <div class="intro">
      <img :src="issue.CoverImages[2]" alt="" />
      <div class="right">
        <div class="title">{{ issue.Name }}</div>
        <div>{{ issue.Year }}年{{ issue.Issue }}期</div>
        <div>{{ issue.Intro }}</div>
      </div>
    </div>

    <div v-for="(item, index) in list" v-bind:key="index" class="list">
      <a-list bordered :data-source="item.Articles">
        <a-list-item slot="renderItem" slot-scope="i, index" :key="index" @click="onArticleClick(i)">
          <div class="title">{{ i.Title }}</div>
          <div v-if="i.Author" class="author">作者：{{ i.Author }}</div>
        </a-list-item>
        <div slot="header">
          <h2>{{ item.Column }}</h2>
        </div>
        <!-- <div slot="footer">Footer</div> -->
      </a-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      issue: {},
    };
  },
  mounted() {
    Promise.all([this.fetchIssue(), this.fetchList()])
      .then((result) => {
        this.issue = result[0];
        this.list = result[1];
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onArticleClick(i) {
      console.log(i);
      let url = `/content?articleid=${i.ArticleID}`
      this.$router.push(url);
    },
    fetchIssue() {
      let url = `/magazine/issue?id=${this.$route.query.magazineguid}&year=${this.$route.query.year}&issue=${this.$route.query.issue}`;
      return new Promise((resolve, reject) => {
        this.axios
          .get(url)
          .then((res) => {
            resolve(res.Data);
          })
          .catch(function (error) {
            reject(error);
          });
      });
    },
    fetchList() {
      let url = `/magazine/article/catalog?&magazineguid=${this.$route.query.magazineguid}&year=${this.$route.query.year}&issue=${this.$route.query.issue}`;
      return new Promise((resolve, reject) => {
        this.axios
          .get(url)
          .then((res) => {
            resolve(res.Data);
          })
          .catch(function (error) {
            reject(error);
          });
      });
    },
  },
};
</script>

<style>
.wrap {
  background-color: white;
  padding: 20px;
}

.intro {
  display: flex;
  padding: 15px;
}
.intro .right {
  margin-left: 25px;
  width: 420px;
}
.right .title {
  font-size: 18px;
}

.list {
  margin-bottom: 24px;
}
.title {
  font-size: 15px;
}
.author {
  font-size: 12px;
}
</style>
