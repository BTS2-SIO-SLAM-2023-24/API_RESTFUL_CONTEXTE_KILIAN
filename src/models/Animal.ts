import mongoose, { Schema, Document } from 'mongoose';

// Schéma  pour l'animal
const AnimalSchema = new Schema({
    nom: { type: String, required: true },
    espece: [{ type: Schema.Types.ObjectId, ref: 'Espece', require: true }],
    // un animal peut être attaché à zero ou plusieurs employés
    employes: [{ type: Schema.Types.ObjectId, ref: 'Employe' }]
});

// Modèle pour l'animal
export interface AnimalModel extends Document {
    nom: string;
    espece: mongoose.Types.ObjectId;
    employes: string[];
}

export default mongoose.model<AnimalModel>('Animal', AnimalSchema);
