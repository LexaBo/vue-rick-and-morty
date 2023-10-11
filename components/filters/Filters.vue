<template>
  <form
      @submit.prevent="onSubmitFilters"
      class="filters"
  >
    <label class="filters__label" for="characterName">name</label>
    <input
        v-model="characterName"
        class="filters__field"
        id="characterName"
        name="name"/>
    <label class="filters__label" for="characterStatus">status</label>
    <select
        v-model="characterStatus"
        class="filters__field"
        id="characterStatus"
        name="status">
      <option value="">all</option>
      <option value="alive">alive</option>
      <option value="dead">dead</option>
      <option value="unknown">unknown</option>
    </select>
    <label class="filters__label" for="characterGender">gender</label>
    <select
        v-model="characterGender"
        class="filters__field"
        id="characterGender"
        name="gender">
      <option value="">all</option>
      <option value="female">female</option>
      <option value="male">male</option>
      <option value="genderless">genderless</option>
      <option value="unknown">unknown</option>
    </select>
    <button class="filters__btn" type="submit">Search</button>
  </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useFilterStore} from "~/stores/FilterStore";
import {useCharactersGridStore} from "~/stores/CharacterGridStore";

export default defineComponent({
  name: 'Filters',
  setup() {
    const {setCharactersActivePage} = useCharactersGridStore();
    const filterStore = useFilterStore();
    const characterGender = ref('');
    const characterStatus = ref('');
    const characterName = ref('');
    const onSubmitFilters = (): void => {
      filterStore.setFilters({
        filtersName: unref(characterName),
        filtersStatus: unref(characterStatus),
        filtersGender: unref(characterGender),
      });

      setCharactersActivePage(1);
    }

    return {
      characterGender,
      characterStatus,
      characterName,
      onSubmitFilters,
    }
  },
})
</script>

<style scoped lang="scss">
  @import "~/assets/components/filters/filters";
</style>