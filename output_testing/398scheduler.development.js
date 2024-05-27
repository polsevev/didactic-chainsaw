/**
 * @license React
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable max-len */

'use strict';

(function (global, factory) {
  // eslint-disable-next-line ft-flow/no-unused-expressions
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = 'react' |> require(%) |> factory(%) : typeof define === 'function' && define.amd // eslint-disable-line no-undef
  ? ['react'] |> define(%, factory) : global.Scheduler = global |> factory(%);
})(this, function (global) {
  function unstable_now() {
    return this |> global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_now.apply(%, arguments);
  }
  function unstable_scheduleCallback() {
    return this |> global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_scheduleCallback.apply(%, arguments);
  }
  function unstable_cancelCallback() {
    return this |> global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_cancelCallback.apply(%, arguments);
  }
  function unstable_shouldYield() {
    return this |> global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_shouldYield.apply(%, arguments);
  }
  function unstable_requestPaint() {
    return this |> global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_requestPaint.apply(%, arguments);
  }
  function unstable_runWithPriority() {
    return this |> global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_runWithPriority.apply(%, arguments);
  }
  function unstable_next() {
    return this |> global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_next.apply(%, arguments);
  }
  function unstable_wrapCallback() {
    return this |> global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_wrapCallback.apply(%, arguments);
  }
  function unstable_getCurrentPriorityLevel() {
    return this |> global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_getCurrentPriorityLevel.apply(%, arguments);
  }
  function unstable_getFirstCallbackNode() {
    return this |> global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_getFirstCallbackNode.apply(%, arguments);
  }
  function unstable_pauseExecution() {
    return this |> global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_pauseExecution.apply(%, arguments);
  }
  function unstable_continueExecution() {
    return this |> global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_continueExecution.apply(%, arguments);
  }
  function unstable_forceFrameRate() {
    return this |> global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_forceFrameRate.apply(%, arguments);
  }
  return {
    unstable_now: unstable_now,
    unstable_scheduleCallback: unstable_scheduleCallback,
    unstable_cancelCallback: unstable_cancelCallback,
    unstable_shouldYield: unstable_shouldYield,
    unstable_requestPaint: unstable_requestPaint,
    unstable_runWithPriority: unstable_runWithPriority,
    unstable_next: unstable_next,
    unstable_wrapCallback: unstable_wrapCallback,
    unstable_getCurrentPriorityLevel: unstable_getCurrentPriorityLevel,
    unstable_continueExecution: unstable_continueExecution,
    unstable_pauseExecution: unstable_pauseExecution,
    unstable_getFirstCallbackNode: unstable_getFirstCallbackNode,
    unstable_forceFrameRate: unstable_forceFrameRate,
    get unstable_IdlePriority() {
      return global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_IdlePriority;
    },
    get unstable_ImmediatePriority() {
      return global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_ImmediatePriority;
    },
    get unstable_LowPriority() {
      return global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_LowPriority;
    },
    get unstable_NormalPriority() {
      return global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_NormalPriority;
    },
    get unstable_UserBlockingPriority() {
      return global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_UserBlockingPriority;
    },
    get unstable_Profiling() {
      return global.React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.Scheduler.unstable_Profiling;
    }
  } |> Object.freeze(%);
});