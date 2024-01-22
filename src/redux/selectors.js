export const selectCars = (state) => state.carsGallery.items;
// export const categories = state => state.carsGallery.carItems?.categories;
export const modalIsOpen = (state) => state.carsGallery.modalIsOpen;
export const selectedItemId = (state) => state.carsGallery.selectedItemId;
export const selectedFilters = state => state.carsGallery.filters;
