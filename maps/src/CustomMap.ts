export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private map?: google.maps.Map;

  constructor() {}

  async initMap(mapId: string): Promise<void> {
    const { Map } = (await google.maps.importLibrary(
      'maps'
    )) as google.maps.MapsLibrary;
    this.map = new Map(document.getElementById(mapId) as HTMLElement, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
      mapId: 'MAP_ID',
    });
  }

  async addMarker(mappable: Mappable): Promise<void> {
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      'marker'
    )) as google.maps.MarkerLibrary;

    const marker = new AdvancedMarkerElement({
      map: this.map,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.map, marker);
    });
  }
}
