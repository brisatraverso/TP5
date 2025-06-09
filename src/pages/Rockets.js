import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Rocket =  async () => {

    const id = getHash();
    const rocket = await getData(id);
    const view = `
        <div class="Rockets-inner">
            <article class="Rocket-card">
                <h2>${rocket.name}</h2>
                <img src="${rocket.links.patch.small || ''}" alt="${rocket.name}">
                <h3>Fallas: <span>${rocket.failures.length > 0 ? rocket.failures.map(f =>f.reason).join(','):'Ninguna'}</span></h3>
                <h3>Campo de detalle: <span>${rocket.details || 'No hay detalles'}</span></</h3>
                <h3>Número de vuelo: <span>${rocket.flight_number}</span></</h3>
                <h3>Fecha y hora de despegue (UTC): <span>${new Date(rocket.date_utc).toLocaleString()}</span></</h3>
            </article>
        </div> 
    `
    return view
};
export default Rocket;