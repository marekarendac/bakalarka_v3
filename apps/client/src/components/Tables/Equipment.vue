<template>
  <div class="card">
    <Toolbar class="mb-2">
      <template #start>
        <Button
          label="Nový"
          icon="pi pi-plus"
          class="p-button-success mr-2"
          @click="openNew"
        />
        <div class="text-left">
          <div class="p-input-icon-left">
            <i class="pi pi-search"></i>
            <InputText
              v-model="filters1['global'].value"
              placeholder="Klikni a hľadaj"
              size="50"
            />
            <Button
              class="p-button-outlined ml-2"
              type="button"
              icon="pi pi-filter-slash"
              @click="clearFilter1()"
            />
          </div>
        </div>
      </template>
    </Toolbar>
    <DataTable
      :value="postDetails"
      :filters="filters1"
      filterMode="lenient"
      :scrollable="true"
      scrollHeight="77vh"
      :paginator="true"
      :rows="10"
    >
      <Column
        field="id"
        header="ID"
        style="max-width: 7%"
        :sortable="true"
      ></Column>
      <Column
        field="idNumber"
        header="ID číslo"
        style="max-width: 11%"
        :sortable="true"
        ;
      ></Column>
      <Column
        field="brand"
        header="Značka"
        style="max-width: 10%"
        :sortable="true"
      ></Column>
      <Column
        field="equipmentType"
        header="Typ nástroja"
        style="max-width: 14%"
        :sortable="true"
      ></Column>
      <Column
        field="description"
        header="Popis"
        style="max-width: 44%"
        :sortable="true"
      ></Column
      ><Column
        field="status"
        header="Stav"
        style="max-width: 12%"
        :sortable="true"
      ></Column>

      <Column header="Operácia" :exportable="false" style="max-width: 13%">
        <template #body="slotProps">
          <Button
            icon="pi pi-pencil"
            class="p-button-rounded p-button-success mr-2"
            @click="editProduct(slotProps.data)"
          />

          <Button
            icon="pi pi-trash"
            class="p-button-rounded p-button-warning"
            @click="confirmDeleteProduct(slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>
  </div>

  <Dialog
    @submit.prevent="handleSubmit"
    v-model:visible="productDialog"
    :style="{ width: '450px' }"
    header="Pridaj nový záznam"
    :modal="true"
    class="p-fluid"
  >
    <div class="field col">
      <label for="idNumber">Identifikačné číslo</label>
      <InputText
        id="idNumber"
        required="true"
        v-model.trim="product.idNumber"
        autofocus
        :class="{ 'p-invalid': submitted && !product.idNumber }"
      />
      <small class="p-error" v-if="submitted && !product.idNumber"
        >idNumber je povinné pole.</small
      >
    </div>

    <div class="field col">
      <label for="brand">Značka</label>
      <InputText
        id="brand"
        required="true"
        v-model.trim="product.brand"
        autofocus
        :class="{ 'p-invalid': submitted && !product.brand }"
      />
      <small class="p-error" v-if="submitted && !product.brand"
        >Značka je povinné pole.</small
      >
    </div>

    <div class="field col">
      <label for="equipmentType">Typ nástroja</label>
      <Dropdown
        id="equipmentType"
        required="true"
        :options="types"
        optionLabel="type"
        v-model="product.equipmentType"
        autofocus
        :class="{ 'p-invalid': submitted && !product.equipmentType }"
      />
      <small class="p-error" v-if="submitted && !product.equipmentType"
        >Typ nástroja je povinné pole.</small
      >
    </div>

    <div class="field col">
      <label for="description">Popis nástroja</label>
      <InputText
        id="description"
        required="true"
        v-model.trim="product.description"
        autofocus
        :class="{ 'p-invalid': submitted && !product.description }"
      />
      <small class="p-error" v-if="submitted && !product.description"
        >Popis je povinné pole.</small
      >
    </div>

    <div class="field col">
      <label for="status">Stav nástroja</label>
      <Dropdown
        id="status"
        :options="statuses"
        optionLabel="status"
        required="true"
        v-model="product.status"
        autofocus
        :class="{ 'p-invalid': submitted && !product.status }"
      />
      <small class="p-error" v-if="submitted && !product.status"
        >Stav je povinné pole.</small
      >
    </div>

    <template #footer>
      <Button
        label="Ukonči"
        icon="pi pi-times"
        class="p-button-text"
        @click="hideDialog"
      />
      <Button
        label="Pridaj"
        icon="pi pi-check"
        class="p-button-text"
        @click="handleSubmit"
      /><Toast />
    </template>
  </Dialog>

  <Dialog
    v-model:visible="deleteProductDialog"
    :style="{ width: '450px' }"
    header="Vymaž vybraný záznam"
    :modal="true"
  >
    <div class="confirmation-content">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span v-if="product"
        >Chceš vymazať záznam s identifikátorom <b>{{ product.idNumber }}</b
        >?</span
      >
    </div>
    <template #footer>
      <Button
        label="Nie"
        icon="pi pi-times"
        class="p-button-text"
        @click="deleteProductDialog = false"
      />
      <Button
        label="Áno"
        icon="pi pi-check"
        class="p-button-text"
        @click="deleteProduct"
      />
      <Toast />
    </template>
  </Dialog>

  <Dialog
    v-model:visible="productDialogEdit"
    :style="{ width: '450px' }"
    header="Edituj vybraný záznam"
    :modal="true"
    class="p-fluid"
  >
    <div class="field col">
      <label for="idNumber">Identifikačné číslo</label>
      <InputText
        id="idNumber"
        required="true"
        v-model="product.idNumber"
        autofocus
        :class="{ 'p-invalid': submitted && !product.idNumber }"
      />
      <small class="p-error" v-if="submitted && !product.idNumber"
        >idNumber is required.</small
      >
    </div>

    <div class="field col">
      <label for="brand">Značka</label>
      <InputText
        id="brand"
        required="true"
        v-model.trim="product.brand"
        autofocus
        :class="{ 'p-invalid': submitted && !product.brand }"
      />
      <small class="p-error" v-if="submitted && !product.brand"
        >Značka is required.</small
      >
    </div>

    <div class="field col">
      <label for="equipmentType">Typ nástroja</label>
      <InputText
        id="equipmentType"
        required="true"
        v-model.trim="product.equipmentType"
        autofocus
        :class="{ 'p-invalid': submitted && !product.equipmentType }"
      />
      <small class="p-error" v-if="submitted && !product.equipmentType"
        >Typ nástroja is required.</small
      >
    </div>

    <div class="field col">
      <label for="description">Popis nástroja</label>
      <InputText
        id="description"
        required="true"
        v-model.trim="product.description"
        autofocus
        :class="{ 'p-invalid': submitted && !product.description }"
      />
      <small class="p-error" v-if="submitted && !product.description"
        >Popis je povinné pole.</small
      >
    </div>

    <div class="field col">
      <label for="status">Stav nástroja</label>
      <InputText
        id="status"
        required="true"
        v-model.trim="product.status"
        autofocus
        :class="{ 'p-invalid': submitted && !product.status }"
      />
      <small class="p-error" v-if="submitted && !product.status"
        >Stav je povinné pole.</small
      >
    </div>

    <template #footer>
      <Button
        label="Ukonči"
        icon="pi pi-times"
        class="p-button-text"
        @click="hideDialogEdit"
      />
      <Button
        label="Edituj"
        icon="pi pi-check"
        class="p-button-text"
        @click="handleEdit"
      /><Toast />
    </template>
  </Dialog>
</template>

<script>
import Api from "@/services/Api.js";
import { FilterMatchMode } from "primevue/api";
export default {
  data() {
    return {
      postDetails: null,
      submitted: false,
      productDialog: false,
      productDialogEdit: false,
      product: {},
      deleteProductDialog: false,
      idNumber: "",
      brand: "",
      equipmentType: "",
      description: "",
      statuses: [
        { status: "Záruka" },
        { status: "OK" },
        { status: "Pokazené" },
      ],
      filters1: {},
      types: [
        { type: "Vŕtačka" },
        { type: "AKU vŕtačka" },
        { type: "Zváračka" },
        { type: "Karbobrúska" },
      ],
    };
  },
  created() {
    this.initFilters1();
  },

  mounted() {
    this.getPostDetails();
  },
  methods: {
    getPostDetails() {
      Api.get("/equipment").then((response) => {
        this.postDetails = response.data;
      });
    },
    openNew() {
      this.product = {};
      this.submitted = false;
      this.productDialog = true;
    },

    hideDialog() {
      this.productDialog = false;
      this.submitted = false;
    },

    hideDialogEdit() {
      this.productDialogEdit = false;
      this.submitted = false;
    },

    handleSubmit() {
      this.submitted = true;
      if (this.product.brand.trim()) {
        Api.post("/equipment", {
          idNumber: this.product.idNumber,
          brand: this.product.brand,
          equipmentType: this.product.equipmentType.type,
          description: this.product.description,
          status: this.product.status.status,
        })
          .then((response) => {
            this.postDetails.push(response.data);
            this.$toast.add({
              severity: "success",
              summary: "Úspech",
              detail: "Záznam bol vytvorený!",
              life: 1200,
            });
            setTimeout(() => {
              this.productDialog = false;
            }, 1200);
          })
          .catch((error) => console.log(error));
      }
    },

    confirmDeleteProduct(product) {
      this.product = product;
      this.deleteProductDialog = true;
    },

    deleteProduct() {
      this.postDetails = this.postDetails.filter(
        (val) => val.id !== this.product.id
      );

      Api.delete("equipment/" + this.product.id);

      this.$toast.add({
        severity: "warn",
        summary: "Vymazané",
        detail: "Záznam bol vymazaný.",
        life: 1200,
      });
      setTimeout(() => {
        this.deleteProductDialog = false;
      }, 1200);
    },

    editProduct(product) {
      this.product = { ...product };
      this.productDialogEdit = true;
    },

    handleEdit() {
      this.submitted = true;

      if (this.product.brand.trim() && this.product.equipmentType.trim());

      {
        if (this.product.id) {
          this.postDetails[this.findIndexById(this.product.id)] = this.product;
        }

        Api.put("equipment/" + this.product.id, {
          id: this.product.id,
          idNumber: this.product.idNumber,
          brand: this.product.brand,
          equipmentType: this.product.equipmentType,
          description: this.product.description,
          status: this.product.status,
        }).catch((error) => console.log(error));
      }
      this.$toast.add({
        severity: "success",
        summary: "Úspech",
        detail: "Záznam bol editovaný!",
        life: 1200,
      });
      setTimeout(() => {
        this.productDialogEdit = false;
      }, 1200);
    },

    findIndexById(id) {
      let index = -1;
      for (let i = 0; i < this.postDetails.length; i++) {
        if (this.postDetails[i].id === id) {
          index = i;
          break;
        }
      }

      return index;
    },
    initFilters1() {
      this.filters1 = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
    clearFilter1() {
      this.initFilters1();
    },
  },
};
</script>

<style lang="scss" scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    align-items: start;
  }
}
@media screen and (max-width: 960px) {
  ::v-deep(.p-toolbar) {
    flex-wrap: wrap;

    .p-button {
      margin-bottom: 0.25rem;
    }
  }
  .confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 960px) {
    ::v-deep(.p-toolbar) {
      flex-wrap: wrap;

      .p-button {
        margin-bottom: 0.25rem;
      }
    }
  }
  .p-filter-column {
    .p-multiselect,
    .p-dropdown,
    .p-inputtext {
      width: 100%;
    }
  }
}
</style>
