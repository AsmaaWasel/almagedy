"use client";

import { useState } from "react";
import { createBus } from "@/app/actions/buses";

export default function BusForm({ onSuccess }: { onSuccess: () => void }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    registrationNumber: "",
    capacity: "",
    type: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await createBus({
        name: formData.name,
        plateNumber: formData.registrationNumber,
        capacity: parseInt(formData.capacity),
        type: formData.type,
      });

      setFormData({
        name: "",
        registrationNumber: "",
        capacity: "",
        type: "",
      });

      onSuccess();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            اسم الحافلة
          </label>
          <input
            type="text"
            placeholder="اسم الحافلة"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            رقم التسجيل
          </label>
          <input
            type="text"
            placeholder="رقم التسجيل"
            value={formData.registrationNumber}
            onChange={(e) =>
              setFormData({ ...formData, registrationNumber: e.target.value })
            }
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            السعة
          </label>
          <input
            type="number"
            placeholder="عدد المقاعد"
            value={formData.capacity}
            onChange={(e) =>
              setFormData({ ...formData, capacity: e.target.value })
            }
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            النوع
          </label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">اختر النوع</option>
            <option value="سياحية">سياحية</option>
            <option value="عادية">عادية</option>
            <option value="فاخرة">فاخرة</option>
            <option value="نقل عام">نقل عام</option>
          </select>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {isLoading ? "جاري الحفظ..." : "حفظ الحافلة"}
        </button>
      </div>
    </form>
  );
}
