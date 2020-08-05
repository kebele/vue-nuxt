<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            src="https://i4.hurimg.com/i/hurriyet/75/750x422/5a53c0937152d80a8cf72f21.jpg"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="item[0]">
            <b-card-text>
              {{ item[1] }}
            </b-card-text>
            <div class="priceBucket">
              <b-card-text class="priceText"> ${{ item[2] }} </b-card-text>
              <b-icon class="h4 mb-2" icon="bucket" variant="danger"></b-icon>
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    item: Array,
  },
};
</script>
<style>
.priceText {
  font-weight: bold;
  font-size: 18px;
}
.priceBucket{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
</style>
