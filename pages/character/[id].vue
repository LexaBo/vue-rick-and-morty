<template>
  <div class="character-information">
    <backHome />
    <div v-if="isLoaded" class="character-information__columns">
      <div class="character-information__column">
        <img class="character-information__image" :src="charactersInfoStore.image" alt="avatar"/>
      </div>
      <div class="character-information__column">
        <ul class="character-information__list">
          <li v-for="(item, index) in charactersInfoStore.characterInfo"
              :key="index"
              class="character-information__item">
            <p class="character-information__text">
              <span class="character-information__title">{{ index }}:</span>
              <span class="character-information__description">{{ item }}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <Loader v-else-if="isLoading"/>
    <h3 v-else>
      Something went wrong
    </h3>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useCharactersInfoStore} from "~/stores/CharacterInfoStore";

export default defineComponent({
  name: 'CharacterInformation',
  setup() {
    const route = useRoute();
    const routeParams = route.params;
    const id = routeParams.id;
    const charactersInfoStore = useCharactersInfoStore()
    const isLoading = computed(() => charactersInfoStore.characterLoadingStatus === 'loading');
    const isLoaded = computed(() => charactersInfoStore.characterLoadingStatus === 'loaded');

    charactersInfoStore.fetchCharacter(id);

    return {
      isLoading,
      isLoaded,
      charactersInfoStore,
    }
  },
})
</script>

<style scoped lang="scss">
  @import "~/assets/pages/character-information/character-information";
</style>