{/* Stores the data for the location related details */}

import ForeCastData from './ForeCastData';

export default interface ForecastDataState {
    status: 'default' | 'loading' | 'success' | 'error';
    data: ForeCastData | undefined;
}