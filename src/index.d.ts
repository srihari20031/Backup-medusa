// src/index.d.ts
import type { Product } from './models/product'
import type { ShippingProfile } from './models/shipping-profile'
import type { ShippingOption } from './models/shipping-option' 
import type { Order } from './models/shipping-order' 

declare module '@medusajs/medusa/dist/models/product' {
    interface Product {
        store_id?: string
        store?: Store
    }
}

declare module '@medusajs/medusa/dist/models/shipping-profile' {
    interface ShippingProfile {
        store_id?: string
        store?: Store
    }
}

declare module '@medusajs/medusa/dist/models/shipping-option' {
    interface ShippingOption {
        store_id?: string
        store?: Store
    }
}

declare module '@medusajs/medusa/dist/models/order' {
    interface Order {
        store_id?: string
        store?: Store
        order_parent_id?: string
        parent?: Order
        children?: Order[]
    }
}
