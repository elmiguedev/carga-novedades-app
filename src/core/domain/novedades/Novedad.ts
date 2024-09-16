export interface Novedad {
  id: number;
  titulo: string;
  descripcion: string;
  usuarioId: number;
  fecha: Date;
  anulada: boolean;
  fechaAnulacion?: Date;
  motivoAnulacion?: string;
  usuarioIdAnulacion?: number;
}