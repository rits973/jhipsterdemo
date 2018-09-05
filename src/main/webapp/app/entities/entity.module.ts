import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhpdemoappRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhpdemoappCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhpdemoappLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhpdemoappDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhpdemoappTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhpdemoappEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhpdemoappJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhpdemoappJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
import { JhpdemoappBookModule } from './book/book.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhpdemoappRegionMySuffixModule,
        JhpdemoappCountryMySuffixModule,
        JhpdemoappLocationMySuffixModule,
        JhpdemoappDepartmentMySuffixModule,
        JhpdemoappTaskMySuffixModule,
        JhpdemoappEmployeeMySuffixModule,
        JhpdemoappJobMySuffixModule,
        JhpdemoappJobHistoryMySuffixModule,
        JhpdemoappBookModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhpdemoappEntityModule {}
