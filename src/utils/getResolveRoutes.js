const resolveRoutes = (route) => {
    // Si es un ID tipo 24 caracteres hex), asumimos que es un ID de cohete //
    const isValidId = /^[a-f0-9]{24}$/.test(route);
    
    if (isValidId) {
        return '/:id';
    }

    return route === '' ? '/' : `/${route}`;
};

export default resolveRoutes;