import * as vl from 'vega-lite-api'
import * as vega from 'vega'
import * as vegaLite from 'vega-lite'
import { Handler } from 'vega-tooltip'

vl.register(vega, vegaLite, {
    view: { renderer: 'svg' },
    init: (view) => { view.tooltip(new Handler().call); }
})

export const viz = vl.markPoint()
    .encode(
        vl.x().fieldQ('acceleration').scale({zero: false}),
        vl.y().fieldQ('horsepower').scale({zero: false}),
        vl.tooltip().fieldN('name')
    )