/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import './index.scss';

import { Snackbar, SnackbarOnCloseEventT } from '@rmwc/snackbar';
import React from 'react';

const CopyPathNotification: React.FC<{
  showCopyNotification: boolean;
  setShowCopyNotification: (value: boolean) => void;
}> = ({ showCopyNotification, setShowCopyNotification }) => (
  <div className="Firestore-Requests-Copy-Path-Snackbar">
    <Snackbar
      open={showCopyNotification}
      onClose={(evt: SnackbarOnCloseEventT) => setShowCopyNotification(false)}
      message="Request path copied to clipboard"
      icon={{ icon: 'check_circle', size: 'medium' }}
    />
  </div>
);

export default CopyPathNotification;