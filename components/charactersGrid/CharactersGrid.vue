<template>
  <div class="characters-grid">
    <template v-if="isLoaded">
      <ul class="characters-grid__list">
        <li
            v-for="character in charactersGridStore.characters"
            :key="character.id"
        >
          <NuxtLink :to="`/character/${character.id}`" class="characters-grid-item__link">
            <div class="characters-grid-item__image-container">
              <img
                  class="characters-grid-item__image"
                  :src="character.image"
                  alt="character"
              />
            </div>
            <h3 class="characters-grid-item__name">{{ character.name }}</h3>
          </NuxtLink>
        </li>
      </ul>
      <v-pagination
          v-model=activePage
          :pages="totalPage"
          :range-size="1"
          :hideFirstButton="true"
          :hideLastButton="true"
          @update:modelValue="onUpdatePage"
      />
    </template>
    <Loader v-else-if="isLoading"/>
    <h5 v-else
        class="characters-grid__nothing-found">
      Nothing found
    </h5>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useCharactersGridStore} from "~/stores/CharacterGridStore";
import {useFilterStore} from "~/stores/FilterStore";
import VPagination from "@hennge/vue3-pagination";

export default defineComponent({
  name: 'CharactersGrid',
  components: {
    VPagination
  },
  setup() {
    const charactersGridStore = useCharactersGridStore();
    const {activePageNumber, totalPage} = toRefs(charactersGridStore);
    const {filtersName, filtersStatus, filtersGender} = toRefs(useFilterStore());
    const isLoading = computed(() => charactersGridStore.charactersLoadingStatus === 'loading');
    const isLoaded = computed(() => charactersGridStore.charactersLoadingStatus === 'loaded');
    const activePage = activePageNumber;

    const onUpdatePage = () => {
      charactersGridStore.setCharactersActivePage(unref(activePage));
    }

    watch([filtersName, filtersStatus, filtersGender, activePage], () => {
      charactersGridStore.getCharacters();
    }, {immediate: true})

    return {
      charactersGridStore,
      isLoading,
      isLoaded,
      activePage,
      totalPage,
      onUpdatePage,
    }
  }
})
</script>

<style scoped lang="scss">
@import "~/assets/components/characters-grid/characters-grid";
</style>