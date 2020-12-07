<template>
  <div class="wrap">
    <a-list :grid="{ gutter: 16, column: 8 }" :data-source="list">
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        v-bind:key="index"
        @click="onDetailClick(item)"
      >
        <a-card hoverable style="width: 150px">
          <img slot="cover" alt="example" :src="item.CoverImages[2]" />
          <a-card-meta :title="item.Name">
          </a-card-meta>
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categorycode: this.$route.query.categorycode,
      list: [],
    };
  },
  mounted() {
      this.fetchList()
  },
  methods: {
    onDetailClick(item) {
      console.log(item);
      let url = `/detail?magazineguid=${item.ID}&year=${item.Year}&issue=${item.Issue}`;
      this.$router.push(url);
    },
    fetchList() {
      let path = `/magazine/ByCategory?categorycode=${this.categorycode}&pagesize=99&pageindex=1&itemcount=0`;
      this.axios.get(path).then((res) => {
        this.list = res.Data;
      });
    },
  },
};
</script>

<style>
</style>