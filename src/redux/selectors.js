export const selectCars = (state) => state.carsGallery.items;
export const modalIsOpen = (state) => state.carsGallery.modalIsOpen;
export const selectedItemId = (state) => state.carsGallery.selectedItemId;
export const selectedFilters = (state) => state.carsGallery.filters;
export const isFirstRender = (state) => state.carsGallery.firstRender;
export const favoriteItems = (state) => state.carsGallery.favItems;
export const loadMore = (state) => state.carsGallery.isLoadMore;
export const loading = (state) => state.carsGallery.loading;