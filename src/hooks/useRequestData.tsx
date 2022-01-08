import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import customAPI from '../api';
import { RequestDataType } from '../components';

const getQueries = (methods: string[], materials: string[]) => {
  if (methods.length === 0 && materials.length === 0) {
    return '';
  }
  if (methods.length === 0) {
    return `material_like=${materials.join('&material_like=')}`;
  }
  if (materials.length === 0) {
    return `method_like=${methods.join('&method_like=')}`;
  }

  return methods
    .map(
      (method) =>
        `method_like=${method}&material_like=${materials.join(
          `&method_like=${method}&material_like=`,
        )}`,
    )
    .join('&');
};

const useRequestData = () => {
  const [requestList, setRequestList] = useState<RequestDataType[]>([]);
  const [methodTypes, setMethodTypes] = useState<string[]>([]);
  const [materialTypes, setMaterialTypes] = useState<string[]>([]);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const queries = `${status ? `status=${status}&` : ''}${getQueries(
          methodTypes,
          materialTypes,
        )}`.replace(/&$/, '');

        setLoading(true);
        const res = await customAPI.get(`/requests?${queries}`);
        setRequestList(() => res.data);
      } catch (err) {
        toast.error('서버와 연결이 불안정합니다.', { toastId: 'queryError' });
      } finally {
        setLoading(false);
      }
    })();
  }, [status, methodTypes, materialTypes]);

  const handleMethod = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      e.target.checked
        ? setMethodTypes((old) => [...old, e.target.value])
        : setMethodTypes((old) =>
            old.filter((method) => method !== e.target.value),
          ),
    [],
  );

  const handleMaterial = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      e.target.checked
        ? setMaterialTypes((old) => [...old, e.target.value])
        : setMaterialTypes((old) =>
            old.filter((method) => method !== e.target.value),
          ),
    [],
  );

  const handleReset = useCallback(() => {
    setMethodTypes([]);
    setMaterialTypes([]);
  }, []);

  const handleStatus = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      e.target.checked ? setStatus('상담중') : setStatus(''),
    [],
  );

  return {
    loading,
    requestList,
    methodTypes,
    materialTypes,
    handleMethod,
    handleMaterial,
    handleReset,
    handleStatus,
  } as const;
};

export default useRequestData;
