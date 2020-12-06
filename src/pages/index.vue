<template>
  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
    <a-list-item slot="renderItem" slot-scope="item" @click="onDetailClick">
      <a-card :title="item.title">
        Card content
      </a-card>
    </a-list-item>
  </a-list>
</template>
<script>
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

export default {
  data() {
    return {
      data,
    };
  },
  mounted() {
    this.fetchList()
  },
  methods: {
    onDetailClick() {
      this.$router.push('/detail')
    },
    fetchList() {
       this.axios.get("/magazine/whole/Recomm?kind=1&top=99").then( res => {
         console.log(res);
       })
    }
  }
};
</script>
<style></style>