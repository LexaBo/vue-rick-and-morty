import {defineStore} from 'pinia'

export const useCharactersInfoStore = defineStore('charactersInfoStore', () => {
    const characterInfo = reactive({
        name: '',
        species: '',
        status: '',
        gender: '',
    });
    const image = ref('');
    const characterLoadingStatus = ref('');

    const fetchCharacter = (id?: string | string[]) => {
        characterLoadingStatus.value = 'loading';

        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(response);
            })
            .then((data) => {
                characterLoadingStatus.value = 'loaded';
                characterInfo.name = data.name
                characterInfo.species = data.species
                characterInfo.status = data.status
                characterInfo.gender = data.gender
                image.value = data.image;
            }).catch(() => {
            characterLoadingStatus.value = 'error';
        });
    };

    return {
        fetchCharacter,
        characterInfo,
        image,
        characterLoadingStatus,
    }
});