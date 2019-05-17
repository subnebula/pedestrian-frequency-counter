const initialState = {
  data: [
    {
      type: 'Feature',
      properties: {
        description: "View St"
      },
      geometry: {
        type: 'Point',
        coordinates: [144.278,-36.759]
      }
    },
    {
      type: 'Feature',
      properties: {
        description: "Bernard St"
      },
      geometry: {
        type: 'Point',
        coordinates: [144.2723412,-36.7564536]
      }
    },
    {
      type: 'Feature',
      properties: {
        description: "Henry St"
      },
      geometry: {
        type: 'Point',
        coordinates: [144.273,-36.758]
      }
    },
    {
      type: 'Feature',
      properties: {
        description: "Forest St"
      },
      geometry: {
        type: 'Point',
        coordinates: [144.272,-36.755]
      }
    }
  ]
}

export default function reducer(state = initialState) {
    
  return state;
}
