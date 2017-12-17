import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: 'app/pages/login/login.module#LoginModule'
    },
    {
        path: 'vendorRegistration',
        loadChildren: 'app/pages/vendor-registration/vendor-registration.module#VendorRegistrationModule'
    },
    {
        path: 'pages',
        component: Pages,
        children: [
            { path: '', redirectTo: 'rfqEntry', pathMatch: 'full' },
            { path: 'userProfile', loadChildren: 'app/pages/user-profile/user-profile.module#UserProfileModule'},
            { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule'},
            { path: 'vendorReview', loadChildren: 'app/pages/vendor-review/vendor-review.module#VendorReviewModule'},
            { path: 'rfqEntry', loadChildren: 'app/pages/rfq-entry/rfq-entry.module#RfqEntryModule'},
            { path: 'computerSupplyTender', loadChildren: 'app/pages/computer-supply-tender/computer-supply-tender.module#ComputerSupplyTenderModule'},
            { path: 'comparisonSheet', loadChildren: 'app/pages/comparison-sheet/comparison-sheet.module#ComparisonSheetModule'},
            { path: 'finalAward', loadChildren: 'app/pages/final-award/final-award.module#FinalAwardModule'},
            { path: 'detailedOffer', loadChildren: 'app/pages/detailed-offer/detailed-offer.module#DetailedOfferModule'},
            { path: 'vendorObjection', loadChildren: 'app/pages/vendor-objection/vendor-objection.module#VendorObjectionModule'},
            { path: 'vendorObjectionDetails', loadChildren: 'app/pages/vendor-objection-details/vendor-objection-details.module#VendorObjectionDetailsModule'},
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
