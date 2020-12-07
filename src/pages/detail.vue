<template>
  <div class="wrap">
    <h3 :style="{ marginBottom: '16px' }">
      Default Size
    </h3>
    <a-list bordered :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
        {{ item }}
      </a-list-item>
      <div slot="header">
        Header
      </div>
      <div slot="footer">
        Footer
      </div>
    </a-list>
    <h3 :style="{ margin: '16px 0' }">
      Small Size
    </h3>
    <a-list size="small" bordered :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
        {{ item }}
      </a-list-item>
      <div slot="header">
        Header
      </div>
      <div slot="footer">
        Footer
      </div>
    </a-list>
    <h3 :style="{ margin: '16px 0' }">
      Large Size
    </h3>
    <a-list size="large" bordered :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
        {{ item }}
      </a-list-item>
      <div slot="header">
        Header
      </div>
      <div slot="footer">
        Footer
      </div>
    </a-list>
  </div>
</template>

<script>
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
export default {
  data() {
    return {
      data,
    };
  },
  mounted() {
    console.log(this.$route.query);
    this.fetchList()
  },
  methods: {
    fetchList() {
      let path = `/magazine/article/catalog?&magazineguid=${this.$route.query.magazineguid}&year=${this.$route.query.year}&issue=${this.$route.query.issue}`;
      this.axios.get(path).then((res) => {
        this.list = res.Data;
      });
    }
  }
}
</script>

<style>
.wrap {
  background-color: white;
  padding: 20px;
}
</style>
