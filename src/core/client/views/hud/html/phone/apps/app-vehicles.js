const appVehicles = Vue.component('app-vehicles', {
    props: ['data'],
    data() {
        return {
            updated: 0
        };
    },
    methods: {
        despawn() {
            if (!('alt' in window)) {
                return;
            }

            view.on('phone:Vehicles:Despawn', VehicleAppController.despawn);
        },
        locate(index) {
            if (!('alt' in window)) {
                return;
            }

            alt.emit('phone:Vehicles:Locate', index);
        },
        spawn(index) {
            if (!('alt' in window)) {
                return;
            }

            alt.emit('phone:Vehicles:Spawn', index);
        },
        getVehicleImage(model) {
            return `../../images/vehicles/${model}.png`;
        }
    },
    mounted() {
        if ('alt' in window) {
            alt.emit('phone:Vehicles:Populate');
        }
    },
    template: `
        <div class="app-bank">
            <div class="app-wrapper">
                <div class="header pt-2 pb-2">
                    <div class="subtitle-2">Vehicles</div>
                </div>
                <div class="main-screen pa-2">
                    <v-card v-for="(vehicle, index) in data.vehicles" :key="index" class="mb-2">
                        <v-img
                            height="150px"
                            :src="getVehicleImage(vehicle.model)"
                        ></v-img>              
                        <v-card-title class="overline font-weight-black">
                            {{ vehicle.model }}
                        </v-card-title>
                        <v-card-text class="font-weight-black">
                            <v-chip class="overline white--text" disabled label>Fuel {{ vehicle.fuel }}</v-chip>
                            <v-chip class="overline white--text" disabled label>Plate: {{ vehicle.uid.substring(0, 8) }}</v-chip>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn @click="locate(index)" class="font-weight-black flex-grow-1 pink--text text--lighten-2" outlined>
                                Locate
                            </v-btn>
                            <v-btn @click="spawn(index)" class="font-weight-black flex-grow-1 green--text text--lighten-2" outlined>
                                Spawn
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </div>
        </div>
    `
});
