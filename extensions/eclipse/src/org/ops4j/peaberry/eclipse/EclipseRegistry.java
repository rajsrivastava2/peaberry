/**
 * Copyright (C) 2009 Stuart McCulloch
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

package org.ops4j.peaberry.eclipse;

import org.ops4j.peaberry.AttributeFilter;
import org.ops4j.peaberry.Export;
import org.ops4j.peaberry.Import;
import org.ops4j.peaberry.ServiceRegistry;
import org.ops4j.peaberry.ServiceScope;

/**
 * @author mcculls@gmail.com (Stuart McCulloch)
 */
public class EclipseRegistry
    implements ServiceRegistry {

  public <T> Export<T> add(Import<T> service) {
    throw new UnsupportedOperationException();
  }

  public <T> Iterable<Import<T>> lookup(Class<T> clazz, AttributeFilter filter) {
    throw new UnsupportedOperationException();
  }

  public <T> void watch(Class<T> clazz, AttributeFilter filter, ServiceScope<? super T> scope) {
    throw new UnsupportedOperationException();
  }
}