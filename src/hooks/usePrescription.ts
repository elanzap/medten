import { useState, useEffect } from 'react';
import type { Prescription, VitalSigns, Medication } from '../types';
import { MEDICATIONS_BY_DIAGNOSIS } from '../constants/medications';
import { LAB_TESTS_BY_DIAGNOSIS } from '../constants/labTests';

export const usePrescription = (patientId: string, initialData?: Partial<Prescription>) => {
  const [prescription, setPrescription] = useState<Partial<Prescription>>({
    patientId,
    date: new Date().toISOString(),
    diagnoses: [],
    medications: [],
    labTests: [],
    ...initialData,
  });

  useEffect(() => {
    if (initialData) {
      setPrescription(prev => ({ ...prev, ...initialData }));
    }
  }, [initialData]);

  const updateVitalSigns = (vitalSigns: VitalSigns) => {
    setPrescription(prev => ({ ...prev, vitalSigns }));
  };

  const updateSymptoms = (symptoms: string) => {
    setPrescription(prev => ({ ...prev, symptoms }));
  };

  const updateDiagnoses = (diagnoses: string[]) => {
    setPrescription(prev => ({
      ...prev,
      diagnoses,
    }));
  };

  const updateMedications = (medications: Medication[]) => {
    setPrescription(prev => ({ ...prev, medications }));
  };

  const updateLabTests = (labTests: string[]) => {
    setPrescription(prev => ({ ...prev, labTests }));
  };

  return {
    prescription,
    updateVitalSigns,
    updateSymptoms,
    updateDiagnoses,
    updateMedications,
    updateLabTests,
  };
};
