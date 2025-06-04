import getData from '../utils/getData.js';

const Home = async () => {
  const rockets = await getData();

  const view = `
    <div class="Rockets">
      ${
        Array.isArray(rockets) && rockets.length
          ? rockets.map(rocket => `
            <article class="Rocket-item">
              <a href="#/${rocket.id}/">
                <img src="${rocket.links?.patch?.small || 'placeholder.png'}" alt="${rocket.name}">
                <h2>${rocket.name}</h2>
              </a>
            </article>
          `).join('')
        : '<p>No hay cohetes disponibles.</p>'
      }
    </div>
  `;
  
  return view;
}

export default Home;