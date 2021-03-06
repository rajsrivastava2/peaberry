/**
 * Copyright (C) 2009 Todor Boev
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
package org.ops4j.peaberry.activation.internal;

import com.google.inject.Injector;
import com.google.inject.Key;

/**
 * Handles a single bundle-scoped object. Called to create and activate the
 * object upon bundle start and deactivate it upon bundle stop.
 * 
 * @author Todor Boev (rinsvind@gmail.com)
 * 
 * @param <T>
 */
public abstract class InstanceBundleRoot<T>
    implements BundleRoot {
  
  private final Key<T> key;
  private T instance;

  public InstanceBundleRoot(final Key<T> key) {
    this.key = key;
  }

  @Override
  public String toString() {
    return getClass().getSimpleName() + "[ " + key + " ]";
  }
  
  public final void activate(final Injector inj) {
    instance = inj.getInstance(key);
    activate(instance);
  }

  public final void deactivate() {
    // We don't have an instance if the activation has crashed.
    if (instance != null) {
      try {
        deactivate(instance);
      } finally {
        instance = null;
      }
    }
  }

  protected abstract void activate(T root);

  protected abstract void deactivate(T root);
}
