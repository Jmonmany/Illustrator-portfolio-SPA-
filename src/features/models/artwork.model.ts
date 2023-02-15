import { ArtworkType } from '../../core/types/artwork';
export class ArtworksClass implements ArtworkType {
    id: string;
    description: string;
    linkTag: string;
    link: string;
    constructor(public title: string, public url: string) {
        this.id = '';
        this.description = '';
        this.linkTag = '';
        this.link = '';
    }
}
