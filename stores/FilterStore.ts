import { defineStore } from 'pinia'
import {Filters} from "~/inteface/filters";

export const useFilterStore = defineStore('FilterStore', () =>{
    const filtersName = ref('');
    const filtersStatus= ref('');
    const filtersGender= ref('');

    const setFilters = (filters: Filters) => {
        filtersName.value = filters.filtersName;
        filtersStatus.value = filters.filtersStatus;
        filtersGender.value = filters.filtersGender;
    };

    return {
        filtersName,
        filtersStatus,
        filtersGender,
        setFilters,
    }
});