using {inventorymanagement as im} from '../db/schema';

@path: 'service/inventory'
service InventoryService {
    entity Notebooks as projection on im.Notebooks;
    annotate Notebooks with @odata.draft.enabled;
    entity Phones    as projection on im.Phones;
    annotate Phones with @odata.draft.enabled;
    entity Tablets   as projection on im.Tablets;
    annotate Tablets with @odata.draft.enabled;
}
