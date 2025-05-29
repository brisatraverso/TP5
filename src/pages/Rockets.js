import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character =  async () => {

    const id = getHash();
    const rocket = await getData(id);
    const view = `
        <div class="Rockets-inner">
            <article class="Rocket-card">
                <img src="${rocket.image}" alt="${rocket.name}">
                <h2>${rocket.name}</h2>
            </article>

            <article class="Rockets-card">
                <h3>Fallas: <span>${rocket.failures}</span></h3>
                <h3>Imagen:<span>${rocket.links.patch.small}</span></ </h3>
                <h3>Campo de detalle: <span>${rocket.details}</span></</h3>
                <h3>Número de vuelo: <span>${rocket.flight_number}</span></</h3>
                <h3>Fecha y hora de despegue (UTC): <span>${rocket.date_utc}</span></</h3>
            </article>
        </div> 
    `
    return view
};
export default Character;