import {defineStore} from 'pinia'
import {useFilterStore} from "~/stores/FilterStore";

export const useCharactersGridStore = defineStore('charactersGridStore', () =>{
    const characters = ref([]);
    const charactersLoadingStatus = ref('');
    const activePageNumber = ref(1);
    const totalPage = ref(1);
    const {filtersName, filtersStatus, filtersGender} = toRefs(useFilterStore());

    const getCharacters = () => {
        const paramName =  unref(filtersName) ? `&name=${unref(filtersName)}` : '';
        const paramStatus =  unref(filtersStatus) ? `&status=${unref(filtersStatus)}` : '';
        const paramGender =  unref(filtersGender) ? `&gender=${unref(filtersGender)}` : '';
        charactersLoadingStatus.value = 'loading'

        fetch(`https://rickandmortyapi.com/api/character?page=${unref(activePageNumber)}${paramName}${paramStatus}${paramGender}`.replace(/\s/g, ''))
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(response);
            })
            .then((data) => {
                characters.value = data.results;
                totalPage.value = data.info.pages;
                charactersLoadingStatus.value = 'loaded';
            }).catch(() => {
                charactersLoadingStatus.value = 'error';
            });
    };

    const setCharactersActivePage = (activePage: number) => {
        activePageNumber.value = activePage;
    }

    return {
        characters,
        getCharacters,
        setCharactersActivePage,
        charactersLoadingStatus,
        activePageNumber,
        totalPage,
    }
});