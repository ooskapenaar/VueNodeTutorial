<template>
  <div>
    <h1>Create An Item</h1>
    <form v-on:submit.prevent="addItem">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Item Name:</label>
            <input type="text" class="form-control" v-model="item.name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Item Price:</label>
              <input type="text" class="form-control col-md-6" v-model="item.price" />
            </div>
          </div>
        </div>
        <div class="form-group">
            <label>Type</label>
            <input type="text" class="form-control" v-model="item.type">
        </div>
        <div class="form-group">
            <label>Assv. Ref</label>
            <input type="text" class="form-control" v-model="item.assistiveReference">
        </div>
        <div class="form-group">
            <label>PZN</label>
            <input type="text" class="form-control" v-model="item.medicationPznNumber">
        </div>
        <div class="form-group">
            <label>Ingredients</label>
            <input type="text" class="form-control" v-model="item.medicationIngredients">
        </div>
        <div class="form-group">
            <label>Dose</label>
            <input type="text" class="form-control" v-model="item.medicationDose">
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Add Item</button>
        </div>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
        return{
          item:{}
        }
    },
    methods: {
      addItem(){
        let uri = 'http://localhost:4000/items/add';
        this.axios.post(uri, this.item).then((response) => {
          this.$router.push({name: 'DisplayItem'})
        })
    }
  }
}
</script>
